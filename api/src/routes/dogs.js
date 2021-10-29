const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { API_KEY } = process.env;

const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const route = Router();

route.get("/", async (req, res) => {
  const { name } = req.query;

  const dogs = await axios.get(`https://api.thedogapi.com/v1/breeds`);

  const races = dogs.data.map((race) => {
    let imperial_1 = parseInt(race.weight.imperial.split("-")[0]);
    let imperial_2 = parseInt(race.weight.imperial.split("-")[1]);
    let tmp = imperial_1 + imperial_2 / 2;
    return {
      id: race.id,
      name: race.name,
      height: race.height.imperial,
      weight: tmp,
      life_span: race.life_span,
      temperament: race.temperament,
      image: race.image.url,
    };
  });

  //todo -> traemos razas de db y juntamos con lo de api
  const racesDB = await Dog.findAll({
    include: {
      model: Temperament,
    },
  });
  races.push(...racesDB);

  if (!name) {
    return res.json(races);
  } else {
    let minName = name;
    const race = races.find((race) =>
      race.name.toLowerCase().includes(minName.toLowerCase())
    );
    if (race) return res.json(race);
    else return res.json({ message: "Race not found" });
  }
});

route.get("/:idRace", async (req, res) => {
  const { idRace } = req.params;

  const race = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );

  if (idRace.length < 10) {
    try {
      let raceById = race.data.find((race) => race.id === parseInt(idRace));

      let imperial_1 = parseInt(raceById.temperament.split("-")[0]);
      let imperial_2 = parseInt(raceById.temperament.split("-")[1]);
      let tmp = imperial_1 + imperial_2 / 2;

      let showRace = {
        id: raceById.id,
        name: raceById.name,
        height: raceById.height.imperial,
        weight: raceById.weight.imperial,
        life_span: raceById.life_span,
        temperament: tmp,
        image: raceById.image.url,
      };

      console.log("Raza por IDDDDDDD " + typeof idRace + " - " + idRace);
      res.json(showRace);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      let raceById = await Dog.findByPk(idRace);

      console.log("taza por UUIDDDDDDDDDDDDD" + typeof idRace + " - " + idRace);
      res.json(raceById);
    } catch (err) {
      console.log(err);
    }
  }

  // if (raceById) return res.json(showRace);
  // else return res.json({ message: "Id race not found" });
});

route.post("/", async (req, res) => {
  const { name, height, weight, life_span, temperament } = req.body;
  const createdDog = await Dog.create({ name, height, weight, life_span });

  for (let i = 0; i < temperament.length; i++) {
    let idTmp = await Temperament.findAll({
      where: {
        name: temperament[i],
      },
      attributes: ["id"],
    });
    createdDog.addTemperament(idTmp[0].id);
  }

  res.status(200).json({ messae: "dog create!" });
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = route;
