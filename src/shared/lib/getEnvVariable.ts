export const getEnvVariable = (token: string): string => {
  const variable = import.meta.env[token];
  if (variable) {
      return variable;
  } else {
      throw Error(`Token "${token}" недоступен`)
  }
}
