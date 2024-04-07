document.getElementById('btn-rename').addEventListener('click', function() {
    const files = document.getElementById('fileInput').files;
    if(files.length === 0) {
        alert("Please select at least one file.");
        return;
    }
    const keywords = document.getElementById('keywordsInput').value.split(',').filter(keyword => keyword.trim() !== "");
    if(keywords.length === 0) {
        alert("Please enter at least one keyword.");
        return;
    }

    const zip = new JSZip();
    let combinations = getCombinations(keywords);

    if(combinations.length < files.length) {
        alert("Not enough unique combinations for the number of files selected. Add more keywords.");
        return;
    }

    // Limitar el número de combinaciones al número de archivos
    combinations = combinations.slice(0, files.length);

    Array.from(files).forEach((file, index) => {
        const extension = file.name.split('.').pop();
        const newName = `${combinations[index].join('_').toLowerCase()}.${extension}`;
        zip.file(newName, file);
    });

    zip.generateAsync({type:"blob"})
    .then(function(content) {
        saveAs(content, "renamed-files.zip");
    });
});

function getCombinations(keywords) {
    let results = [];

    const combine = (prefix, words) => {
        for (let i = 0; i < words.length; i++) {
            const newPrefix = prefix.concat(words[i]);
            results.push(newPrefix);
            combine(newPrefix, words.slice(i + 1));
        }
    };

    combine([], keywords);
    return results;
}
