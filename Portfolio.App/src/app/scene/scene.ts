import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { gsap } from 'gsap';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.html',
  styleUrls: ['./scene.css']
})
export class Scene implements AfterViewInit {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;

  ngAfterViewInit() {
    this.createScene();
    this.createCamera();
    this.createRenderer();
    this.createCube();
    this.animate();
  }

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
  }

  private createCamera() {
    this.camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
    this.camera.position.z = 5;
  }

  private createRenderer() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }

  private createCube() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
  }

  private animate() {
    gsap.to(this.cube.rotation, { duration: 1, x: this.cube.rotation.x + Math.PI * 2, y: this.cube.rotation.y + Math.PI * 2, repeat: -1 });

    const render = () => {
      requestAnimationFrame(render);
      this.renderer.render(this.scene, this.camera);
    };

    render();
  }
}
