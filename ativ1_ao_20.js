// 1. Saudação Personalizada
console.log("01. Saudação:")
let nome = "Márcio";
let idade = 17;
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

// 2. Conversão de Temperatura
console.log("\n02. Conversão de Temperatura:");
let grau_Celsius = 40;
let fahrenheit = (grau_Celsius * 1.8) + 32;
console.log(`A temperatura ${grau_Celsius}°C equivale a ${fahrenheit} °F`);

// 3. Calculadora de IMC (Indice de Massa Corporal)
console.log("\n03. Calculadora de IMC: ");
let res = 0;
let peso = 70;
let altura = 1.70;
let IMC = peso / (altura**2);
if (IMC < 18.5) {
  res = "Abaixo do peso.";
} else if (IMC >= 18.5 && IMC <= 24.9) {
  res = "Peso Normal(ideal).";
} else if (IMC >= 25.0 && IMC <= 29.9) {
  res = "Sobrepeso.";
} else {
  res = ("Obesidade.");
}
console.log(`Com um peso de ${peso} e altura de ${altura}\n O IMC é ${IMC}\n Resultado: ${res}`);

// 4. Sistemas de Descontos
console.log("\n04. Sistema de Desconto:")
let preço = 100;
let porc_desconto = 15;
let valor_desconto = (porc_desconto / 100) * preço;
let valor_final = preço - valor_desconto;
console.log(`Um produto que custa R$${preço},00 e possui um desconto de ${porc_desconto}% terá os respectivos valores:\n. Valor do desconto: R$${valor_desconto},00.\n. Valor Final: R$${valor_final},00.`);

// 5. Cálculo de Gorjeta
console.log("\n05. Cálculo de Gorjeta:");
let valor_conta = 300;
let gorjeta = (10 / 100) * valor_conta;
let total = valor_conta + gorjeta;
console.log(`Em um restaurante que cobra R$${valor_conta},00 para um jantar de três cursos para duas pessoas. Sabendo que a gorjeta padrão é de 10%, os preços são iguais à:\n. Valor da gorjeta: R$${gorjeta},00.\n. Valor total: R$${total},00.`)

// 6. Par ou Impar
console.log("\n06. Par ou Impar")
let num = 40;

if (num%2 == 0) {
  res = "Par";
} else {
  res = "Impar";
}
console.log(`O número ${num} é ${res}.`)

// 7. Classificação Etária
console.log("\n07. Classificação Etária: ")
let idade_pessoa = 30;
if (idade_pessoa >= 0 && idade_pessoa <= 12) {
    console.log("Você é uma criança.");
} else if (idade_pessoa >= 13 && idade_pessoa <= 17) {
    console.log("Você é um Adolescente.");
} else if (idade_pessoa >= 18 && idade_pessoa <= 59) {
    console.log("Você é um Adulto.");
} else if (idade_pessoa >= 60) {
    console.log("Você é um Idoso.");
} else {
    console.log("Não é possível sua existência.");
}

// 8. Simulador de Login
console.log("\n08. Simulador de Login:");
const usuario = "admin";
let senha = "12345";

if (usuario == "admin" && senha === "12345") {
    console.log("Acesso concedido.");
} else {
    console.log("Acesso negado.")
}

// 9. Sistema de Notas Escolares
console.log("\n09. Sistema de Notas Escolares:")
let nota1 = 5.0;
let nota2 = 3.0;
let nota3 = 4.0;
let media = (nota1 + nota2 + nota3) / 3;
console.log(`Média: ${media}`);
if (media >= 7) {
    console.log("Você foi Aprovado!");
} else if (media >= 5 && media <= 6.9) {
    console.log("Você está de Recuperação!");
} else {
    console.log("Você está Reprovado!");
}

// 10. Ano Bissexto
console.log("\n10. Ano Bissexto:")
let ano = 2000;

if (ano % 4 === 0 && ano % 100 != 0 || ano % 400 === 0) {
  console.log("É um ano bissexto!")
} else {
    console.log("Não é um ano bissexto!")
}

// 11. Dia útil ou fim de semana
console.log("\n11. Dia Útil ou fim de semana:");
let dia = 7;
if (dia === 1 || dia === 7) {
    console.log("Este dia corresponde a um fim de semana.")
} else if (dia > 1 && dia < 7) {
    console.log("Este dia corresponde a um dia da semana.")
} else {
    console.log("Não possue dia correspondente.")
}

// 12. Contagem Simples
console.log("\n12. Contagem Simples:")
for (let i = 1; i <= 15; i++) {
    console.log(i);
}

// 13. Somatório de 1 a 100
console.log("\n13. Somatório de 1 ao 100:");
let soma = 0;
let contador = 1;
while (contador <= 100) {
    soma += contador;
    contador++;
}
console.log(`Soma: ${soma}.`);

// 14. Tabuada Automática
console.log("\n14. Tabuada Automática:");
let n = 12;
for(let cont = 1; cont <= 10; cont++) {
    console.log(`. ${n} x ${cont} = ${n*cont}`);
}

// 15. Caçador de Números Pares
console.log("\n15. Caçador de Números Pares:");
for (let numero = 1; numero <= 50; numero++) {
    if (numero % 2 == 0) {
        console.log(numero);
    }
}

// 16. Contagem Regressiva
console.log("\n16. Contagem Regressiva:")
let relogio = 10;
while (relogio != 0) {
    console.log(relogio);
    relogio--;
    if (relogio == 0) {
        console.log("Feliz Ano Novo!");
        break;
    }
}
