export const extraerImagenes = (codigoHTML: string): string[] => {
  const patron = /(<img\s+src=")(?<url>[^"]+)"\s*\/?>/g;
  const urls: string[] = [];

  let coincidencia;

  while ((coincidencia = patron.exec(codigoHTML)) !== null) {
    if (coincidencia.groups?.url) {
      urls.push(coincidencia.groups.url);
    }
  }
  return urls;
};
