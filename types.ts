// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[]) ou Array<number>
let items: string[];
items = ["foo", "bar"];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string];
title = [1, "foo"];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}

//any (qualquer coisa) NÃO É LEGAL!
let coisa;
coisa = [1];

// void (vazio)
function logger(): void {
  console.log("foo");
}

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error("error");
}

// object
let cart: object;
cart = {
  key: "fi",
};

// Type Inference
let message2 = "mensagem definida";

window.addEventListener("click", (e) => {
  console.log(e.target);
});
