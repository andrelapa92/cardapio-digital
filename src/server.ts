import app from './app';
import { sequelize } from './config/database';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync(); // Cria as tabelas se não existirem
    console.log('DB conectado e sincronizado');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();
