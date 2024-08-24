/**
 * Extracts and capitalizes the segments of a given path.
 *
 * @param path - The path to extract segments from.
 * @returns An array of capitalized segments from the input path.
 *
 * @example
 */

function extractPathSegments(path: string) {
  // Function to capitalise the first letter
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Divide the path into segments using ‘/’ as a separator
  const segments = path.split("/");

  // Filter out empty segments and capitalise the first letter
  return segments
    .filter((segment) => segment.length > 0)
    .map((segment) => capitalizeFirstLetter(segment));
}

export default extractPathSegments;
