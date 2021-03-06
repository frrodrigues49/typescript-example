// type alias
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}`);
}

type Platform = "Windows" | "Linux" | "Mac Os"; // type union

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform("Mac Os");

logDetails(123, "sapato");
logDetails("123", "sapato");

logInfo(123, "sapato");
logInfo("123", "sapato");
