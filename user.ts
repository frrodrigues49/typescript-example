// Exemplo: Jogo Online

// accountInfo
// charInfo

// union (caracter: |)
type AccountInfo = {
  id: number;
  name: string;
  email?: string; // o mesmo que meail: string | undefined
};

const account: AccountInfo = {
  id: 123,
  name: "Fagner",
  email: "frodriguesbetim@gmail.com",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "Fagner",
  level: 100,
};

// Intersection (caracter: &)
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  name: "Fagner",
  nickname: "Fagner",
  id: 123,
  level: 100,
};
