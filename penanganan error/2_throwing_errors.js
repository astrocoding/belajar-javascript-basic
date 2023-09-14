const json = '{ "age": 20 }';

try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  console.log(user.name); // undefined
  console.log(user.age);  // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

const mahasiswa = '{ "name": "Zaenal", "age": 20 }';

try {
  const mhs = JSON.parse(mahasiswa);

  if (!mhs.name) {
    throw new SyntaxError("'name' is required.");
  }

  errorCode;

  console.log(mhs.name); // Zaenal
  console.log(mhs.age);  // 20
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}