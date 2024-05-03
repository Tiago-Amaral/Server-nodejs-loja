const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Importe o axios para fazer solicitações HTTP
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para fazer o parsing do corpo das solicitações como JSON
app.use(express.json());

// Adiciona o middleware CORS
app.use(cors());

// Rota para lidar com a requisição da API do Mercado Livre
app.get('/api/celulares', async (req, res) => {
  try {
    // Faz a solicitação para a API do Mercado Livre para buscar celulares
    const response1 = await axios.get('http://api.mercadolibre.com/sites/MLB/search?q=celular');
    const celulares = response1.data;
    
    // Retorna os dados da resposta da API do Mercado Livre para o cliente
    res.json(celulares);
  } catch (error) {
    console.error('Erro ao buscar celulares:', error);
    // Retorna um status de erro 500 e uma mensagem de erro para o cliente
    res.status(500).send('Erro ao buscar celulares na API do Mercado Livre.');
  }
});



//segunda api de camisas



app.get('/api/camisas', async (req, res) => {
  try {
    // Faz a solicitação para a API do Mercado Livre para buscar celulares
    const response2 = await axios.get('http://api.mercadolibre.com/sites/MLB/search?q=camisas');
    const camisas = response2.data;
    
    // Retorna os dados da resposta da API do Mercado Livre para o cliente
    res.json(camisas);
  } catch (error) {
    console.error('Erro ao buscar camisas:', error);
    // Retorna um status de erro 500 e uma mensagem de erro para o cliente
    res.status(500).send('Erro ao buscar camisas na API do Mercado Livre.');
  }
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
