
        function removeBackground() {
            const fileInput = document.getElementById("image-file");
            const file = fileInput.files[0];
            const formData = new FormData();
            formData.append("size", "auto");
            formData.append("image_file", file);

            fetch("https://api.remove.bg/v1.0/removebg", {
                method: "POST",
                body: formData,
                headers: {
                    "X-Api-Key": "9ncBD8D4U5VnhFrLLtjfw9Ne"
                }
            })
            .then((response) => {
                if (response.ok) {
                    return response.blob();
                }
                throw new Error("Error: " + response.status + " " + response.statusText);
            })
            .then((blob) => {
                const imgUrl = URL.createObjectURL(blob);
                document.getElementById("result-image").src = imgUrl;
                document.getElementById("result").style.display = "block";
            })
            .catch((error) => {
                console.error("Request failed:", error);
            });
        }
    
