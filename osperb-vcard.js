import { CSS3DObject } from './libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js';
import {mockWithVideo, mockWithImage} from './libs/camera-mock.js';
import {loadGLTF, loadTexture, loadTextures, loadVideo} from './libs/loader.js';
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    // mockWithVideo('./assets/mock-videos/portfolio1.mp4');

    // initialize MindAR 
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: './targets.mind',
    });
    const {renderer, cssRenderer, scene, cssScene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    const [
      cardTexture,
      emailTexture,
      locationTexture,
      webTexture,
      profileTexture,
      leftTexture,
      rightTexture,
      portfolioItem0Texture,
      portfolioItem1Texture,
      portfolioItem2Texture,

      web01Texture,
      web02Texture,
      web03Texture,
      web04Texture,
      web05Texture,
      web06Texture,
      web07Texture,
      web08Texture,
      web09Texture
    ] = await loadTextures([
      './osperb/osperb-coverpage.jpg',
      './assets/portfolio/icons/email.png',
      './assets/portfolio/icons/location.png',
      './assets/portfolio/icons/web.png',
      './assets/portfolio/icons/profile.png',

      './assets/portfolio/icons/left.png',
      './assets/portfolio/icons/right.png',

      './assets/portfolio/portfolio/paintandquest-preview.png',
      './assets/portfolio/portfolio/coffeemachine-preview.png',
      './assets/portfolio/portfolio/peak-preview.png',

      './osperb/web/web01.jpg',
      './osperb/web/web02.jpg',
      './osperb/web/web03.jpg',
      './osperb/web/web04.jpg',
      './osperb/web/web05.jpg',
      './osperb/web/web06.jpg',
      './osperb/web/web07.jpg',
      './osperb/web/web08.jpg',
      './osperb/web/web09.jpg',
    ]);

    const planeGeometry = new THREE.PlaneGeometry(1, 0.574);
    const cardMaterial = new THREE.MeshBasicMaterial({map: cardTexture});
    const card = new THREE.Mesh(planeGeometry, cardMaterial);

    const iconGeometry = new THREE.CircleGeometry(0.055, 32);
    const emailMaterial = new THREE.MeshBasicMaterial({map: emailTexture});
    const webMaterial = new THREE.MeshBasicMaterial({map: webTexture});
    const profileMaterial = new THREE.MeshBasicMaterial({map: profileTexture});
    const locationMaterial = new THREE.MeshBasicMaterial({map: locationTexture});

    const leftMaterial = new THREE.MeshBasicMaterial({map: leftTexture});
    const rightMaterial = new THREE.MeshBasicMaterial({map: rightTexture});
    
    const emailIcon = new THREE.Mesh(iconGeometry, emailMaterial);
    const webIcon = new THREE.Mesh(iconGeometry, webMaterial);
    const profileIcon = new THREE.Mesh(iconGeometry, profileMaterial);
    const locationIcon = new THREE.Mesh(iconGeometry, locationMaterial);
    const leftIcon = new THREE.Mesh(iconGeometry, leftMaterial);
    const rightIcon = new THREE.Mesh(iconGeometry, rightMaterial);

    const portfolioItem0Video = await loadVideo("./assets/portfolio/portfolio/paintandquest.mp4");
    portfolioItem0Video.muted = true;
    const portfolioItem0VideoTexture = new THREE.VideoTexture(portfolioItem0Video);
    const portfolioItem0VideoMaterial = new THREE.MeshBasicMaterial({map: portfolioItem0VideoTexture});
    const portfolioItem0Material = new THREE.MeshBasicMaterial({map: portfolioItem0Texture});
    const portfolioItem1Material = new THREE.MeshBasicMaterial({map: portfolioItem1Texture});
    const portfolioItem2Material = new THREE.MeshBasicMaterial({map: portfolioItem2Texture});

    //osperb web examples material
    const web01Material = new THREE.MeshBasicMaterial({map: web01Texture});
    const web02Material = new THREE.MeshBasicMaterial({map: web02Texture});
    const web03Material = new THREE.MeshBasicMaterial({map: web03Texture});
    const web04Material = new THREE.MeshBasicMaterial({map: web04Texture});
    const web05Material = new THREE.MeshBasicMaterial({map: web05Texture});
    const web06Material = new THREE.MeshBasicMaterial({map: web06Texture});
    const web07Material = new THREE.MeshBasicMaterial({map: web07Texture});
    const web08Material = new THREE.MeshBasicMaterial({map: web08Texture});
    const web09Material = new THREE.MeshBasicMaterial({map: web09Texture});

    const portfolioItem0V = new THREE.Mesh(planeGeometry, portfolioItem0VideoMaterial); 
    const portfolioItem0 = new THREE.Mesh(planeGeometry, portfolioItem0Material); 
    const portfolioItem1 = new THREE.Mesh(planeGeometry, portfolioItem1Material); 
    const portfolioItem2 = new THREE.Mesh(planeGeometry, portfolioItem2Material); 

    //osperb web examples item
    const web01 = new THREE.Mesh(planeGeometry, web01Material); 
    const web02 = new THREE.Mesh(planeGeometry, web02Material); 
    const web03 = new THREE.Mesh(planeGeometry, web03Material); 
    const web04 = new THREE.Mesh(planeGeometry, web04Material); 
    const web05 = new THREE.Mesh(planeGeometry, web05Material); 
    const web06 = new THREE.Mesh(planeGeometry, web06Material); 
    const web07 = new THREE.Mesh(planeGeometry, web07Material); 
    const web08 = new THREE.Mesh(planeGeometry, web08Material); 
    const web09 = new THREE.Mesh(planeGeometry, web09Material); 

    profileIcon.position.set(-0.42, -0.5, 0);
    webIcon.position.set(-0.14, -0.5, 0);
    emailIcon.position.set(0.14, -0.5, 0);
    locationIcon.position.set(0.42, -0.5, 0);

    const portfolioGroup = new THREE.Group();
    portfolioGroup.position.set(0, 0, -0.01);
    portfolioGroup.position.set(0, 0.6, -0.01);

    portfolioGroup.add(web01);
    portfolioGroup.add(leftIcon);
    portfolioGroup.add(rightIcon);
    leftIcon.position.set(-0.7, 0, 0);
    rightIcon.position.set(0.7, 0, 0);

    const avatar = await loadGLTF('./assets/models/softmind/scene.gltf');
    avatar.scene.scale.set(0.004, 0.004, 0.004);
    avatar.scene.position.set(0, -0.25, -0.3);

    const anchor = mindarThree.addAnchor(0);
    // anchor.group.add(avatar.scene);
    anchor.group.add(card);
    anchor.group.add(emailIcon);
    anchor.group.add(webIcon);
    anchor.group.add(profileIcon);
    anchor.group.add(locationIcon);
    anchor.group.add(portfolioGroup);

    const textElement = document.createElement("div");
    const textObj = new CSS3DObject(textElement);
    textObj.position.set(0, -1000, 0);
    textObj.visible = false;
    textElement.style.background = "#FFFFFF";
    textElement.style.padding = "20";
    textElement.style.fontSize = "40px";

    const cssAnchor = mindarThree.addCSSAnchor(0);
    cssAnchor.group.add(textObj);

    // handle buttons
    leftIcon.userData.clickable = true;
    rightIcon.userData.clickable = true;
    emailIcon.userData.clickable = true;
    webIcon.userData.clickable = true;
    profileIcon.userData.clickable = true;
    locationIcon.userData.clickable = true;
    portfolioItem0.userData.clickable = true;
    portfolioItem0V.userData.clickable = true;

    const portfolioItems = [web01, web02, web03, web04, web05, web06, web07, web08, web09]; 
    let currentPortfolio = 0;

    document.body.addEventListener('click', (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      const mouse = new THREE.Vector2(mouseX, mouseY);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
	let o = intersects[0].object; 
	while (o.parent && !o.userData.clickable) {
	  o = o.parent;
	}
	if (o.userData.clickable) {
	  if (o === leftIcon || o === rightIcon) {
	    if (o === leftIcon) {
	      currentPortfolio = (currentPortfolio - 1 + portfolioItems.length) % portfolioItems.length;
	    } else {
	      currentPortfolio = (currentPortfolio + 1) % portfolioItems.length;
	    }
	    portfolioItem0Video.pause();
	    for (let i = 0; i < portfolioItems.length; i++) {
	      portfolioGroup.remove(portfolioItems[i]);
	    }
	    portfolioGroup.add(portfolioItems[currentPortfolio]);
	  } else if (o === portfolioItem0) {
	    portfolioGroup.remove(portfolioItem0);
	    portfolioGroup.add(portfolioItem0V);
	    portfolioItems[0] = portfolioItem0V;
	    portfolioItem0Video.play();
	  } else if (o === portfolioItem0V) {
	    if (portfolioItem0Video.paused) {
	      portfolioItem0Video.play();
	    } else {
	      portfolioItem0Video.pause();
	    }
	  } else if (o === webIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "www.osperb.com";
	  } else if (o === emailIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "hi@osperb.com";
	  } else if (o === profileIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "+91 9562 11 00 55";
	  } else if (o === locationIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "Malappuram, Kerala, India";
	  }
	}
      }
    });

    const clock = new THREE.Clock();
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const iconScale = 1 + 0.2 * Math.sin(elapsed*5);
      [webIcon, emailIcon, profileIcon, locationIcon].forEach((icon) => {
	icon.scale.set(iconScale, iconScale, iconScale);
      });

      const avatarZ = Math.min(0.3, -0.3 + elapsed * 0.5);
      avatar.scene.position.set(0, -0.25, avatarZ);

      renderer.render(scene, camera);
      cssRenderer.render(cssScene, camera);
    });
  }
  start();
});
