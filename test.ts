
Deno.test("read only test", { permissions: { read: true } }, async () => {
  await Deno.writeTextFile("./hello.txt", "Hello World!");
  console.log("File written to ./hello.txt");
});