export const getTime = async (req, res) => {
  try {
    res.send(
      "time " +
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes() +
        ":" +
        new Date(Date.now()).getSeconds() +
        "       date " +
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear()
    );
  } catch (err) {
    res.send(err.message);
  }
};

export const random = (req, res) => {
  res.send(`${Math.ceil(Math.random() * 100)}`);
};

export const isNumber = (req, res) => {
  try {
    const character = req.params.character;

    if (isNaN(character)) {
      res.status(200).send("This is not a number");
    } else {
      res.status(200).send("This is a number");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};
