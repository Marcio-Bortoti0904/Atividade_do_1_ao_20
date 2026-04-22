// 1. Saudação Personalizada
console.log(" 1. Saudação:")
let nome = "Márcio";
let idade = 17;
console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");

// 2. Conversão de Temperatura
console.log("\n 2. Conversão de Temperatura:");
let grau_Celsius = 40;
let fahrenheit = (grau_Celsius * 1.8) + 32;
console.log("O valor de " + grau_Celsius + " equivale a: " + fahrenheit);

// 3. Calculadora de IMC (Indice de Massa Corporal)
console.log("\n 3. Calculadora de IMC: ");
let peso = 70;
let altura = 1.70;
let IMC = peso / (altura**2);
if (IMC < 18.5) {
  res = "Abaixo do peso.";
} else if (IMC > 18.5 && IMC < 24.9) {
  res = "Peso Normal(ideal).";
} else if (IMC > 25.0 && IMC < 29.9) {
  res = "Sobrepeso.";
} else {
  console.log("Obesidade.")
}
console.log(`Com um peso de ${peso} e altura de ${altura}\n O IMC é ${IMC}\n Resultado: ${res}`);

// 4. Sistemas de Descontos
console.log("\n 4. Sistema de Desconto:")
preço = 100;
porc_desconto = 15;
valor_desconto = (porc_desconto / 100) * preço;
valor_final = preço - valor_desconto;
console.log(`Um produto que custa R$${preço},00 e possui um desconto de ${porc_desconto}% terá os respectivos valores:\n. Valor do desconto: R$${valor_desconto},00.\n. Valor Final: R$${valor_final},00.`);
// 5. Cálculo de Gorjeta
console.log("\n 5. Cálculo de Gorjeta:");
valor_conta = 300;
gorjeta = (10 / 100) * valor_conta;
total = valor_conta + gorjeta;
console.log(`Em um restaurante que cobra R$${valor_conta},00 para um jantar de três cursos para duas pessoas. Sabendo que a gorjeta padrão é de 10%, os preços são iguais à:\n. Valor da gorjeta: R$${gorjeta},00.\n. Valor total: R$${total},00.`)

// 10. Ano Bissexto
ano = 2024;

if (ano%4 == 0 && ano%100 != 0) {
  console.log("É um ano bissexto!")
}
// 20. Sequência de Fibonacci
