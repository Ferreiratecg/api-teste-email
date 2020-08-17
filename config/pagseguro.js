module.exports = {
    mode: process.env.NODE_ENV === "production" ? "live" : "sandbox",
    sandbox: process.env.NODE_ENV === "production" ? false : true,
    sandbox_email: process.env.NODE_ENV === "production" ? null : "c67964569551420226147@sandbox.pagseguro.com.br",
    email: "rutinhadepaula6@gmail.com",
    token: "0562B892F8A44736B20BDE5BA925AECB",
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao"
}