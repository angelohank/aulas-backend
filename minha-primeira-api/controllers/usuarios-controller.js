let usuarios = [
  { username: "angelo", isAdmin: true },
  { username: "carlos", isAdmin: false },
];

export function verificaAdmin(username) {
  const usernameDescriptografado = Buffer.from(username, "base64").toString(
    "utf-8",
  );

  let usuario = usuarios.find((u) => {
    return u.username === usernameDescriptografado;
  });

  if (usuario) {
    console.log(`achei um usuario [IS_ADMIN] ${usuario.isAdmin}`);
    return usuario.isAdmin;
  }

  return false;
}
