import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { Resume } from "./Resume";
import { existsSync, mkdirSync, writeFileSync, copyFileSync } from "fs";
import { join } from "path";

const distDir = 'dist';
const styleFile = 'style.css';
const resumeFile = 'resume.pdf';

if (!existsSync(distDir)) {
  mkdirSync(distDir);
}

writeFileSync(
  join(distDir, "index.html"),
  "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(<Resume />)
);

copyFileSync(join('src', styleFile), join(distDir, styleFile));

if (existsSync(resumeFile)) {
  copyFileSync(resumeFile, join(distDir, resumeFile));
}
