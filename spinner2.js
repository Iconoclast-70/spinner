process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spin = "|/-\\||/-\\|\n";
let animate = 0;
for (const char of spin) {
  animate += 200;
  setTimeout(() => {
    process.stdout.write("\r" + char);
  }, 100 + animate);
}
