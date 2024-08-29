import {
  FaFileCsv,
  FaFileExcel,
  FaFilePdf,
  FaFileWord,
  FaFile,
  FaFileImage,
} from "react-icons/fa6";

export const STATES_DICT = {
  0: "Sin enviar",
  1: "Enviado",
};

// ? This dict defines the {extension: props} to each type of file allowed in the app
export const FILES_DICT = {
  default: { Icon: FaFile, color: "#4488ee" },
  pdf: { Icon: FaFilePdf, color: "#FA0F00" },
  docx: { Icon: FaFileWord, color: "#1B5EBE" },
  xls: { Icon: FaFileExcel, color: "#10793F" },
  csv: { Icon: FaFileCsv, color: "#10793F" },
  png: { Icon: FaFileImage, color: "#10793F" },
};

export const MIME_TYPES_DICT = {
  // Text
  txt: "text/plain",
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  json: "application/json",
  xml: "application/xml",
  csv: "text/csv",

  // Images
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  bmp: "image/bmp",
  svg: "image/svg+xml",

  // Documents
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",

  // Archives
  zip: "application/zip",
  rar: "application/x-rar-compressed",
  tar: "application/x-tar",
  gz: "application/gzip",

  // Audio
  mp3: "audio/mpeg",
  wav: "audio/wav",
  ogg: "audio/ogg",

  // Video
  mp4: "video/mp4",
  webm: "video/webm",
  avi: "video/x-msvideo",
  mov: "video/quicktime",

  // Fonts
  ttf: "font/ttf",
  otf: "font/otf",
  woff: "font/woff",
  woff2: "font/woff2",

  // Application
  apk: "application/vnd.android.package-archive",
  bin: "application/octet-stream",
  iso: "application/x-iso9660-image",
  sqlite: "application/x-sqlite3",
};
