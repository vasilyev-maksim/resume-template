import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { Resume } from "./Resume";
import { writeFileSync } from "fs";

writeFileSync(
  "index.html",
  "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(<Resume />)
);
