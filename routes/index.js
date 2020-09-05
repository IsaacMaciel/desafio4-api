import express from "express";

import {
  destroy,
  destroyAll,
  update,
  store,
  index,
  show,
} from "../controllers/gradesController.js";

const route = express();

route.route("/grade").get(index).post(store).delete(destroyAll);

route.route("/grade/:id").put(update).delete(destroy).get(show);

export { route };
