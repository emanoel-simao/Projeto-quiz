document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quizForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;

    const respostas = {
      q1: "HTML",
      q2: "domínio",
      q4: "1991", // só vamos checar o ano
      q5: ["JavaScript", "Java"],
      q7: "type",
      q8: "Java"
    };

    // q1: radio
    const q1 = form.q1.value;
    if (q1 === respostas.q1) score++;

    // q2: texto livre
    const q2 = form.q2.value.trim().toLowerCase();
    if (q2 === respostas.q2) score++;

    // q4: data
    const q4 = form.q4.value;
    if (q4.startsWith(respostas.q4)) score++; // aceita qualquer data de 1991

    // q5: checkbox múltiplo
    const q5Marcadas = Array.from(form.querySelectorAll('input[name="q5"]:checked')).map(i => i.value);
    const corretasQ5 = respostas.q5.sort().join(",");
    const usuarioQ5 = q5Marcadas.sort().join(",");
    if (usuarioQ5 === corretasQ5) score++;

    // q7: select
    const q7 = form.q7.value;
    if (q7 === respostas.q7) score++;

    // q8: texto
    const q8 = form.q8.value.trim().toLowerCase();
    if (q8 === respostas.q8.toLowerCase()) score++;

    // mensagem personalizada
    let mensagem = "";
    if (score <= 2) {
      mensagem = "Não desista! Cada tentativa é uma oportunidade de aprender.";
    } else if (score <= 4) {
      mensagem = "Você ainda precisa melhorar. Que tal estudar mais sobre programação?";
    } else if (score <= 5) {
      mensagem = "Bom! Seu conhecimento em programação está satisfatório.";
    } else {
      mensagem = "Perfeito! Você está muito bem informado sobre programação!";
    }

    // respostas corretas para mostrar
    const respostasCertas = `
🔍 Respostas corretas:
1. HTML
2. domínio
3. (livre)
4. 1991
5. JavaScript, Java
6. (livre)
7. type
8. Java
`;

    alert(`✅ Você acertou ${score} de 6 perguntas avaliadas.\n${mensagem}\n\n${respostasCertas}`);
  });
});
