// function init() {
// 	// //不用定义定义canvas元素
// 	// var renderer = new THREE.WebGLRender();
// 	// renderer.setSize(400,300);
// 	// document.getElementsByTagName('body')[0].appendChild(renderer.domElement);
	

// 	// 定义渲染器
// 	var renderer = new THREE.WebGLRenderer({
// 		canvas: document.getElementById('mainCanvas')
// 	});
// 	renderer.setClearColor('black');//设置背景色black
// 	//定义场景
// 	var scene = new THREE.Scene();
// 	//定义照相机
// 	var camera= new THREE.PerspectiveCamera(45, 4/3, 1, 1000);
// 	camera.position.set(0, 0, 5);
// 	scene.add(camera);//照相机需要被添加到场景中


// 	//定义一个长方体
// 	var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
// 		new THREE.MeshBasicMaterial({
// 			color: 'yellow'
// 		})
// 	);
// 	scene.add(cube);


// 	//render
// 	renderer.render(scene, camera);
// }


// //正交照相机
// function init() {
// 	var renderer = new THREE.WebGLRenderer({
// 		canvas: document.getElementById('mainCanvas')
// 	})
// 	renderer.setClearColor('white');
// 	var scene = new THREE.Scene();
// 	var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);//OrthographicCamera(left, right, top, bottom, near, far);
// 	camera.position.set(4, -3 ,5);
// 	camera.lookAt(new THREE.Vector3(0, 0, 0));
// 	scene.add(camera);
// 	var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
// 		new THREE.MeshBasicMaterial({
// 			color: 'red',
// 			wireframe: true
// 		})
// 	);
// 	scene.add(cube);

// 	renderer.render(scene, camera);
// }



// //透视投影照相机
// function init() {
// 	var renderer = new THREE.WebGLRenderer({
// 		canvas: document.getElementById('mainCanvas')
// 	})
// 	renderer.setClearColor('grey');
// 	var scene = new THREE.Scene();
// 	var camera = new THREE.PerspectiveCamera(30, 4/3, 1, 10);//PerspectiveCamera(fov, aspect, near, far);
// 	camera.position.set(0, 0 , 5);
// 	scene.add(camera);

// 	var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
// 		new THREE.MeshBasicMaterial({
// 			color: '#ccc',
// 			wireframe: true
// 		})
// 	)
// 	scene.add(cube);

// 	renderer.render(scene, camera);
// }


function init() {
	var renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('mainCanvas')
	})
	renderer.setClearColor('grey');
	var scene = new THREE.Scene();
	var camera = new THREE.OrthographicCamera(-3, 3, 2, -2, 0.1, 100);
	camera.position.set(15, 15, 15);
	camera.lookAt(new THREE.Vector3(0, 0, 0));
	scene.add(camera);
	var light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 4, 5);
    scene.add(light);
	var cube_small = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), 
		new THREE.MeshLambertMaterial({
			color: '#ccc'
		})
	); 
	cube_small.position.set(-3, -0.75, -0.5);
	scene.add(cube_small);
	var cube_big = new THREE.Mesh(new THREE.CubeGeometry(5, 2, 2),
		new THREE.MeshLambertMaterial({
			color: "#ccc"
		})
	);
	cube_big.position.set(0.5, 0 ,0);
	scene.add(cube_big);

	var circle_1 = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.1, 12, 18),
		new THREE.MeshLambertMaterial({
			color: "#ccc"
		})
	);
	circle_1.position.set(-3.35, -1.75, -0.5);
	scene.add(circle_1);
	var circle_2 = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.1, 12, 18),
		new THREE.MeshLambertMaterial({
			color: "#ccc"
		})
	);
	circle_2.position.set(-2, -2, 0);
	scene.add(circle_2);
	var circle_3 = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.1, 12, 18),
		new THREE.MeshLambertMaterial({
			color: "#ccc"
		})
	);
	circle_3.position.set(0.3, -2, 0);
	scene.add(circle_3);

	renderer.render(scene, camera);
}

// function init() {
// 	var renderer = new THREE.WebGLRenderer({
// 	    canvas: document.getElementById('mainCanvas')
// 	});
// 	renderer.setClearColor(0x000000);
// 	var scene = new THREE.Scene();

// 	// camera
// 	var camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
// 	camera.position.set(25, 25, 25);
// 	camera.lookAt(new THREE.Vector3(0, 0, 0));
// 	scene.add(camera);

// 	// light
// 	var light = new THREE.PointLight(0xffffff, 1, 100);
// 	light.position.set(10, 15, 5);
// 	scene.add(light);

// 	var material = new THREE.MeshLambertMaterial({
// 	    color: 0xffff00,
// 	    //emissive: 0xff0000
// 	});

// 	var cube = new THREE.Mesh(new THREE.CubeGeometry(5, 5, 5), material);
// 	scene.add(cube);
// 	//var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 20, 8), material);
// 	//scene.add(sphere);

// 	renderer.render(scene, camera);
// }
























































