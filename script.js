document.addEventListener('DOMContentLoaded', function() {
    const yearSelect = document.getElementById('year');
    const ctx = document.getElementById('myChart').getContext('2d');

    // Dados de exemplo 
    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'casos por contaminação',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40, 65, 70, 89, 78, 95]
        }]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Inicializar o gráfico com os dados de exemplo
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: chartOptions
    });

    // Adicionar um ouvinte de evento ao seletor de ano
    yearSelect.addEventListener('change', function() {
        // Obter o ano selecionado
        const selectedYear = parseInt(yearSelect.value);

        // Atualizar os dados do gráfico com base no ano selecionado 
        
        // Atualize o conjunto de dados no formato: data.datasets[0].data = [novo_ano_dados];
        
        // Atualize o gráfico
        myChart.update();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo para o Rio de Janeiro 
    const data = {
        totalCases: 50000,
        totalDeaths: 1500,
        monthlyCases: {
            Janeiro: 2500,
            Fevereiro: 3200,
            Março: 4200,
            Abril: 3800,
            Maio: 2900,
            Junho: 3500,
            Julho: 4100,
            Agosto: 4800,
            Setembro: 5200,
            Outubro: 4500,
            Novembro: 3900,
            Dezembro: 4200
        }
    };

    // Atualiza os totais de casos e óbitos
    document.getElementById('totalCases').textContent = data.totalCases.toLocaleString();
    document.getElementById('totalDeaths').textContent = data.totalDeaths.toLocaleString();

    // Prepara os dados para o gráfico de barras
    const meses = Object.keys(data.monthlyCases);
    const casosMensais = Object.values(data.monthlyCases);

    // Cria o gráfico de barras
    const ctx = document.getElementById('monthlyCasesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: meses,
            datasets: [{
                label: 'Casos Mensais',
                backgroundColor: 'rgba(243, 43, 43, 0.2)',
                borderColor: 'rgba(243, 43, 43, 5)',
                borderWidth: 1,
                data: casosMensais
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
