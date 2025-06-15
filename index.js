'use strict';

const paintings = [
	...[
		{ name: 'Kebab', file: 'kebab.png', blockSize: '1x1', pixelSize: '16x16' },
		{ name: 'Aztec', file: 'aztec.png', blockSize: '1x1', pixelSize: '16x16' },
		{ name: 'Alban', file: 'alban.png', blockSize: '1x1', pixelSize: '16x16' },
		{ name: 'Aztec2', file: 'aztec2.png', blockSize: '1x1', pixelSize: '16x16' },
		{ name: 'Bomb', file: 'bomb.png', blockSize: '1x1', pixelSize: '16x16' },
		{ name: 'Plant', file: 'plant.png', blockSize: '1x1', pixelSize: '16x16' },
		{ name: 'Meditative', file: 'meditative.png', blockSize: '1x1', pixelSize: '16x16' },
		{ name: 'Wasteland', file: 'wasteland.png', blockSize: '1x1', pixelSize: '16x16' },
		{ name: 'Graham', file: 'graham.png', blockSize: '1x2', pixelSize: '16x32' },
		{ name: 'Wanderer', file: 'wanderer.png', blockSize: '1x2', pixelSize: '16x32' },
		{ name: 'Prairie Ride', file: 'prairie_ride.png', blockSize: '1x2', pixelSize: '16x32' },
		{ name: 'Courbet', file: 'courbet.png', blockSize: '2x1', pixelSize: '32x16' },
		{ name: 'Creebet', file: 'creebet.png', blockSize: '2x1', pixelSize: '32x16' },
		{ name: 'Sea', file: 'sea.png', blockSize: '2x1', pixelSize: '32x16' },
		{ name: 'Sunset', file: 'sunset.png', blockSize: '2x1', pixelSize: '32x16' },
		{ name: 'Pool', file: 'pool.png', blockSize: '2x1', pixelSize: '32x16' },
		{ name: 'Baroque', file: 'baroque.png', blockSize: '2x2', pixelSize: '32x32' },
		{ name: 'Humble', file: 'humble.png', blockSize: '2x2', pixelSize: '32x32' },
		{ name: 'Match', file: 'match.png', blockSize: '2x2', pixelSize: '32x32' },
		{ name: 'Bust', file: 'bust.png', blockSize: '2x2', pixelSize: '32x32' },
		{ name: 'Skull And Roses', file: 'skull_and_roses.png', blockSize: '2x2', pixelSize: '32x32' },
		{ name: 'Stage', file: 'stage.png', blockSize: '2x2', pixelSize: '32x32' },
		{ name: 'Void', file: 'void.png', blockSize: '2x2', pixelSize: '32x32' },
		{ name: 'Wither', file: 'wither.png', blockSize: '2x2', pixelSize: '32x32' },
		{ name: 'Backyard', file: 'backyard.png', blockSize: '3x4', pixelSize: '48x64' },
		{ name: 'Pond', file: 'pond.png', blockSize: '3x4', pixelSize: '48x64' },
		{ name: 'Fern', file: 'fern.png', blockSize: '3x3', pixelSize: '48x48' },
		{ name: 'Cotán', file: 'cotan.png', blockSize: '3x3', pixelSize: '48x48' },
		{ name: 'Cavebird', file: 'cavebird.png', blockSize: '3x3', pixelSize: '48x48' },
		{ name: 'Bouquet', file: 'bouquet.png', blockSize: '3x3', pixelSize: '48x48' },
		{ name: 'Tides', file: 'tides.png', blockSize: '3x3', pixelSize: '48x48' },
		{ name: 'Endboss', file: 'endboss.png', blockSize: '3x3', pixelSize: '48x48' },
		{ name: 'Sunflowers', file: 'sunflowers.png', blockSize: '3x3', pixelSize: '48x48' },
		{ name: 'Owlemons', file: 'owlemons.png', blockSize: '3x3', pixelSize: '48x48' },
		{ name: 'Lowmist', file: 'lowmist.png', blockSize: '4x2', pixelSize: '64x32' },
		{ name: 'Finding', file: 'finding.png', blockSize: '4x2', pixelSize: '64x32' },
		{ name: 'Changing', file: 'changing.png', blockSize: '4x2', pixelSize: '64x32' },
		{ name: 'Fighters', file: 'fighters.png', blockSize: '4x2', pixelSize: '64x32' },
		{ name: 'Passage', file: 'passage.png', blockSize: '4x2', pixelSize: '64x32' },
		{ name: 'Kong', file: 'donkey_kong.png', blockSize: '4x3', pixelSize: '64x48' },
		{ name: 'Mortal coil', file: 'skeleton.png', blockSize: '4x3', pixelSize: '64x48' },
		{ name: 'Skull on fire', file: 'burning_skull.png', blockSize: '4x4', pixelSize: '64x64' },
		{ name: 'Orb', file: 'orb.png', blockSize: '4x4', pixelSize: '64x64' },
		{ name: 'Unpacked', file: 'unpacked.png', blockSize: '4x4', pixelSize: '64x64' },
		{ name: 'Pigscene', file: 'pigscene.png', blockSize: '4x4', pixelSize: '64x64' },
		{ name: 'Pointer', file: 'pointer.png', blockSize: '4x4', pixelSize: '64x64' }
	].sort((a, b) => {
		const [wA, hA] = a.blockSize.split('x').map(Number);
		const [wB, hB] = b.blockSize.split('x').map(Number);
		if (wA <= wB && hA <= hB && (wA < wB || hA < hB)) return -1;
		if (wA >= wB && hA >= hB && (wA > wB || hA > hB)) return 1;
		return 0;
	})
];

const index = {
	paintingsHolder: document.querySelector('.paintings'),
	canvas: document.querySelector('.canvas'),
	templateImage: document.querySelector('.templateImage'),
	uploadImageButton: document.querySelector('.uploadImageButton'),
	dropdown: document.querySelector('select'),
	imageInput: document.querySelector('.imageInput'),
	uploadedImage: null,
	blockWidth: null,
	blockHeight: null,
	viewingOriginal: false,
	borderColorInput: document.querySelector('#borderColorPicker'),
	borderColorDisplay: document.querySelector('.borderColorInputDisplay'),
	backgroundColorInput: document.querySelector('#backgroundColorPicker'),
	backgroundColorDisplay: document.querySelector('.backgroundColorInputDisplay'),
	canvasBackground: document.querySelector('.canvasBackground'),
	downloadButton: document.querySelector('.downloadButton'),
	downloadLink: document.querySelector('.downloadLink'),
	preparingDownload: false,
	containCheckbox: document.querySelector('#containCheckbox'),
	
	init() {
		index.ctx = index.canvas.getContext('2d');
		index.updateCanvasDisplaySize(1, 1);
		index.displayOriginalPaintings();
		
		listener.add(index.dropdown, 'change', async (e) => {
			const [ blockWidth, blockHeight ] = e.currentTarget.value.split('x').map(Number);
			await index.updateCanvasDisplaySize(blockWidth, blockHeight);
			
			index.canvas.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'nearest'
			});
		});
		
		listener.add(index.uploadImageButton, 'click', () => {
			index.imageInput.click();
		});
		
		listener.add(index.imageInput, 'change', (e) => {
			const file = e.target.files[0];
			
			if (!file) {
				return;
			}
			
			index.viewingOriginal = false;
			index.updateBackgroundColor(true);
			index.uploadedImage = new Image();
			listener.add(index.uploadedImage, 'load', index.updateUploadedImage);
			index.uploadedImage.setAttribute('src', URL.createObjectURL(file));
		});
		
		listener.add(index.borderColorInput, 'input', () => {
			index.borderColorDisplay.style.backgroundColor = index.borderColorInput.value;
			
			if (index.viewingOriginal) {
				return;
			}
			
			index.updateBorder();
		});
		
		listener.add(index.backgroundColorInput, 'input', () => {
			index.backgroundColorDisplay.style.backgroundColor = index.backgroundColorInput.value;
			
			if (index.viewingOriginal) {
				return;
			}
			
			index.updateBackgroundColor();
		});
		
		listener.add(index.downloadButton, 'click', async () => {
			if (index.uploadedImage === null) {
				return;
			}
			
			index.preparingDownload = true;
			await index.updateUploadedImage();
			
			setTimeout(() => {
				index.canvas.toBlob(blob => {
					let filename = `${index.blockWidth * 16}x${index.blockHeight * 16}.png`;
					index.downloadLink.download = filename;
					index.downloadLink.href = URL.createObjectURL(blob);
					index.downloadLink.click();
					index.preparingDownload = false;
				}, 'image/png');
			}, 100);
		});
		
		listener.add(index.containCheckbox, 'change', () => {
			if (index.uploadedImage) {
				index.updateUploadedImage();
			}
		});
	},
	
	getDominantColor(imageData) {
		const data = imageData.data;
		const colorCount = {};
		let maxCount = 0;
		let dominantColor = [0, 0, 0];
		
		for (let i = 0; i < data.length; i += 4) {
			const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
			
			if (a < 128) {
				continue;
			}
			
			const qr = Math.round(r / 16) * 16;
			const qg = Math.round(g / 16) * 16;
			const qb = Math.round(b / 16) * 16;
			const key = `${qr},${qg},${qb}`;
			colorCount[key] = (colorCount[key] || 0) + 1;
			
			if (colorCount[key] > maxCount) {
				maxCount = colorCount[key];
				dominantColor = [qr, qg, qb];
			}
		}
		
		const darken = v => Math.max(0, v - 30);
		const dr = darken(dominantColor[0]);
		const dg = darken(dominantColor[1]);
		const db = darken(dominantColor[2]);
		return `rgb(${dr},${dg},${db})`;
	},
	
	updateBorder(newColor) {
		if (newColor) {
			index.borderColorInput.value = rgbToHex(newColor);
			index.borderColorDisplay.style.backgroundColor = index.borderColorInput.value;
		}
		
		const canvas = index.canvas;
		const ctx = index.ctx;
		const borderThickness = Math.round(canvas.width / index.blockWidth) / 16;
		ctx.save();
		ctx.lineWidth = borderThickness;
		ctx.strokeStyle = index.borderColorInput.value;
		ctx.strokeRect(borderThickness / 2, borderThickness / 2, canvas.width - borderThickness, canvas.height - borderThickness);
		ctx.restore();
	},
	
	updateBackgroundColor(reset) {
		if (reset) {
			index.backgroundColorInput.value = '#000000'
			index.backgroundColorDisplay.style.backgroundColor = index.backgroundColorInput.value;
		}
		
		index.canvasBackground.style.backgroundColor = index.backgroundColorInput.value;
	},
	
	updateUploadedImage() {
		return new Promise((resolve, reject) => {
			const img = index.uploadedImage;
			const canvas = index.canvas;
			const ctx = index.ctx;
			
			if (!img) {
				return;
			}
			
			const blockW = index.blockWidth || 1;
			const blockH = index.blockHeight || 1;
			const aspect = blockW / blockH;
			let targetW = img.width;
			let targetH = img.height;
			
			if (index.containCheckbox.checked) {
				const paintingAspect = aspect;
				const imageAspect = img.width / img.height;
				
				if (paintingAspect > imageAspect) {
					canvas.height = img.height;
					canvas.width = Math.round(img.height * paintingAspect);
				} else {
					canvas.width = img.width;
					canvas.height = Math.round(img.width / paintingAspect);
				}
			} else {
				if (img.width / img.height > aspect) {
					targetH = img.height;
					targetW = Math.round(targetH * aspect);
				} else {
					targetW = img.width;
					targetH = Math.round(targetW / aspect);
				}
				
				canvas.width = targetW;
				canvas.height = targetH;
			}
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
			if (index.preparingDownload) {
				ctx.fillStyle = index.backgroundColorInput.value;
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			}
			
			let scale, drawWidth, drawHeight, offsetX, offsetY;
			
			if (index.containCheckbox.checked) {
				if (canvas.height === img.height) {
					scale = canvas.height / img.height;
					drawWidth = img.width * scale;
					drawHeight = img.height * scale;
					offsetX = (canvas.width - drawWidth) / 2;
					offsetY = 0;
				} else {
					scale = canvas.width / img.width;
					drawWidth = img.width * scale;
					drawHeight = img.height * scale;
					offsetX = 0;
					offsetY = (canvas.height - drawHeight) / 2;
				}
			} else {
				scale = Math.max(canvas.width / img.width, canvas.height / img.height);
				drawWidth = img.width * scale;
				drawHeight = img.height * scale;
				offsetX = (canvas.width - drawWidth) / 2;
				offsetY = (canvas.height - drawHeight) / 2;
			}
			
			ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
			
			if (index.preparingDownload) {
				index.updateBorder();
			}
			
			if (!index.viewingOriginal && !index.preparingDownload) {
				const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
				const dominantColor = index.getDominantColor(imageData);
				
				index.updateBorder(dominantColor);
				index.updateBackgroundColor();
			}
			
			if (!index.preparingDownload) {
				canvas.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'nearest'
				});
			}
			
			resolve();
		});
	},
	
	updateCanvasDisplaySize(blockWidth, blockHeight) {
		index.blockWidth = blockWidth;
		index.blockHeight = blockHeight;
		
		return new Promise((resolve, reject) => {
			let templateSrc = `./media/templates/${blockWidth}x${blockHeight}.png`;
			
			listener.add(index.templateImage, 'load', () => {
				let backgroundBlockWidth = index.templateImage.clientWidth / (blockWidth + 4);
				
				index.canvas.style.width = `${backgroundBlockWidth * blockWidth}px`;
				index.canvas.style.height = `${backgroundBlockWidth * blockHeight}px`;
				
				index.canvas.width = backgroundBlockWidth * blockWidth;
				index.canvas.height = backgroundBlockWidth * blockHeight;
				
				index.canvasBackground.style.width = `${(backgroundBlockWidth * blockWidth) - 2}px`;
				index.canvasBackground.style.height = `${(backgroundBlockWidth * blockHeight) - 2}px`;
				
				if (index.uploadedImage !== null) {
					index.updateUploadedImage();
				}
				
				resolve();
			});
			
			index.templateImage.src = templateSrc;
		});
	},
	
	displayOriginalPaintings() {
		paintings.forEach((painting, idx) => {
			const el = document.createElement('div');
			el.className = 'painting';
			painting.id = idx + 1;
			el.setAttribute('paintingid', idx + 1);
			el.innerHTML = `
				<div class="paintingContent" filename="${painting.file}">
					<div class="thumbnail">
						<img src="./media/paintings/${painting.file}"/>
					</div>
					<div class="name">
						<span title="In-game name">${painting.name}</span>
						<div class="blockSize" title="Block size">
							<img src="./media/block.png"/>
							<span>${painting.blockSize}</span>
						</div>
						<div class="pixelSize" title="Pixel size">
							<img src="./media/pixel.png"/>
							<span>${painting.pixelSize}</span>
						</div>
					</div>
					<div class="button">
						<button>Use painting</button>
					</div>
				</div>
			`;
			
			listener.add(el.querySelector('button'), 'click', async (e) => {
				index.viewingOriginal = true;
				
				let filename = elParent(e.currentTarget, '.paintingContent').getAttribute('filename');
				const paintingData = paintings.find(p => p.file === filename);
				const [ blockWidth, blockHeight ] = paintingData.blockSize.split('x').map(Number);
				index.dropdown.value = paintingData.blockSize;
				
				index.uploadedImage = null;
				await index.updateCanvasDisplaySize(blockWidth, blockHeight);
				
				index.uploadedImage = new Image();
				listener.add(index.uploadedImage, 'load', index.updateUploadedImage);
				index.uploadedImage.setAttribute('src', `./media/paintings/${filename}`);
			});
			
			index.paintingsHolder.appendChild(el);
		});
	}
};

index.init();