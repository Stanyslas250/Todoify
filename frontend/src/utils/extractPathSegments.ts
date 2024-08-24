function extractPathSegments(path: string) {
  // Fonction pour mettre la première lettre en majuscule
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Diviser le chemin en segments en utilisant "/" comme séparateur
  const segments = path.split("/");

  // Filtrer les segments vides et mettre la première lettre en majuscule
  return segments
    .filter((segment) => segment.length > 0)
    .map((segment) => capitalizeFirstLetter(segment));
}

export default extractPathSegments;
