/*
 * stmnts-03.js
 * Language: javascript
 * Test: tests/stmnts-03.tests.js
 * Path: src/stmnts-03.js
 * Arithmetic Expressions

/**
 * Calculates the perimeter of the rectangle rounded to 2 decimal places
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} - the perimeter of the rectangle rounded to 2 decimal places
 *
 */

function rectanglePerimeter(width, height) {
  return width + width + height + height;
}

/**
 * Calculates the area of a rectangle rounded to 2 decimal places
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} - the area of the rectangle rounded to 2 decimal places
 *
 */
function rectangleArea(width, height) {
  return width * height;
}

/**
 * Calculates the circumference of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - the radius of the circle
 * @returns {number} - the circumference of the circle rounded to 2 decimal places
 *
 * The math equation is c = 2 * pi * radius
 *
 * Hint: use toFixed()
 */
function circleCircumference(radius) {
  const ans = 2 * Math.PI * radius;
  return +ans.toFixed(2);
}

/**
 * Calculates the area of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - the radius of the circle
 * @returns {number} - the area of the circle rounded to 2 decimal places
 */
function circleArea(radius) {
  const ans = Math.PI * radius * radius;
  return +ans.toFixed(2);
}

/**
 * Calculates the area of a triangle with three sides
 * rounded to 2 decimal places
 *
 * @param {number} base - the base of the triangle
 * @param {number} height - the height of the triangle
 * @returns {number} - the area of the triangle rounded to 2 decimal places
 */
function triangleArea(base, height) {
  const ans = 0.5 * base * height;
  return +ans.toFixed(2);
}

/**
 * Calculates the hypotenuse of a right triangle with two sides,
 * rounded to 2 decimal places
 * @param {number} sideA - the length of side A
 * @param {number} sideB - the length of side B
 * @returns {number} - the hypotenuse of the triangle rounded to 2 decimal places
 */
function pythagorean(sideA, sideB) {
  const ans = Math.hypot(sideA, sideB);
  return +ans.toFixed(2);
}

module.exports = {
  rectanglePerimeter,
  rectangleArea,
  circleCircumference,
  circleArea,
  triangleArea,
  pythagorean,
};
