let map = new Map();
map.set("apple", "red");
map.set("pear", "yellow");
map.set("blueberry", "blue");
map.set("carrot", "orange");
for (const name of map.keys()) {
    console.log(`Ключ — ${name}, значение — ${map.get(name)}`);
}
