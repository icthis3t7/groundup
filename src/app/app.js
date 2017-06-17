var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'

];

[8,6,7,9]

let materialsLength2 = materials.map((material) => {
  return material.length;

});

document.body.innerText = document.body.innerText + " result: " + materialsLength2;
