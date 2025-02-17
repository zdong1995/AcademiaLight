async function getStars() {
    try {
        const response = await fetch('https://api.github.com/repos/username/repo');
        const data = await response.json();
        document.getElementById('stars').textContent = data.stargazers_count;
    } catch (error) {
        console.error('Error fetching GitHub stars:', error);
    }
}

document.addEventListener('DOMContentLoaded', getStars); 