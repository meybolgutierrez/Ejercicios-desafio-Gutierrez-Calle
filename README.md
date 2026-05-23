# Plataforma de Simuladores Interactivos
**Desarrollado por:** Meybol Yara Gutierrez Calle

Plataforma web interactiva que integra dos simuladores basados en lógica matemática y física, cumpliendo con estándares de maquetación profesional y manipulación limpia del DOM.

## Características Técnicas
* **HTML5**: Estructura semántica con validaciones nativas en formularios.
* **CSS3**: Diseño adaptativo (Grid/Flexbox) con control estricto del *Box Model*.
* **JavaScript**: Algoritmos puros usando `document.getElementById` sin librerías externas.

## Módulos del Sistema

### 1. Ley de Enfriamiento (Transferencia de Calor)
* **Fórmula**: T = Ts + (T0 - Ts) * e^(-k * t)
* **Lógica**: Utiliza `Math.exp()` y redondea el resultado final al entero más cercano con `Math.round()`.

### 2. Calculador de Combinaciones (Sorteo)
* **Fórmula**: C(n, r) = n! / (r! * (n - r)!)
* **Lógica**: Incluye una función propia e iterativa para el cálculo del factorial (`!`). Multiplica las combinaciones de dos grupos independientes.

## Casos de Prueba
* **Ejercicio 1**: T0 = 120, Ts = 38, k = 0.45, t = 3.
* **Ejercicio 2**: Grupo 1 (59, 5) y Grupo 2 (35, 1).

## Estructura del Proyecto
── index.html                 
── stilos.css
── java.js
