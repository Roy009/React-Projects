import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import { saveAs } from 'file-saver';
const FrequencyCounter = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://www.terriblytinytales.com/test.txt');
            const content = response.data;
            const words = content.toLowerCase().match(/\b\w+\b/g);
            const frequencyMap = {};
            words.forEach((word) => {
                frequencyMap[word] = (frequencyMap[word] || 0) + 1;
            });
            const sortedWords = Object.keys(frequencyMap).sort(
                (a, b) => frequencyMap[b] - frequencyMap[a]
            );
            const topWords = sortedWords.slice(0, 20);
            const histogramData = topWords.map((word) => ({
                word,
                frequency: frequencyMap[word],
            }));

            setData(histogramData);
            setLoading(false);
            drawChart(histogramData);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const drawChart = (histogramData) => {
        const ctx = document.getElementById('chart').getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: histogramData.map((data) => data.word),
                datasets: [
                    {
                        label: 'Word Frequency',
                        data: histogramData.map((data) => data.frequency),
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        stepSize: 1,
                    },
                },
            },
        });
    };

    const exportToCSV = () => {
        const csvData = data.map((item) => `${item.word},${item.frequency}`).join('\n');
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, 'word_frequency.csv');
    };

    return (
        <div>
            <button onClick={fetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Submit'}
            </button>
            <canvas id="chart"></canvas>
            <button onClick={exportToCSV} disabled={!data.length}>
                Export
            </button>
        </div>
    );
}

export default FrequencyCounter
