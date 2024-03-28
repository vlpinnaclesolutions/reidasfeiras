import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-wrap">

      <div className="w-full md:w-1/3 xl:w-1/3 p-4">
        <div className="h-48 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Total de Vendas</h2>
          <p className="text-2xl font-bold">R$ 10,000</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Usuários Ativos</h2>
          <p className="text-2xl font-bold">500</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Pedidos Pendentes</h2>
          <p className="text-2xl font-bold">20</p>
        </div>
      </div>
      {/* Adicione mais cartões conforme necessário */}
    </div>
  );
}

export default Dashboard;