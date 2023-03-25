/**
 * Almost identity function using a cubic soft clip.
 *
 * @param {number} x The input value.
 * @param {number} m The threshold above which the input value is unchanged.
 * @param {number} n The value to use when the input value is zero or close to zero.
 * @returns The result of the almost identity function.
 * @remarks Imagine you don't want to modify a signal unless it's drops to zero or close to it, in which case you want to replace the value with a small possitive constant. Then, rather than clamping the value and introduce a discontinuity, you can smoothly blend the signal into the desired clipped value. So, let m be the threshold (anything above m stays unchanged), and n the value things will take when the signal is zero. Then, the following function does the soft clipping (in a cubic fashion).
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const almostIdentityCubic = (
  x: number,
  m: number,
  n: number
): number => {
  if (x > m) return x

  const a = 2.0 * n - m
  const b = 2.0 * m - 3.0 * n
  const t = x / m

  return (a * t + b) * t * t + n
}

/**
 * Almost identity function using a square root of a biased square.
 *
 * @param {number} x The input value.
 * @param {number} n The bias to use in the square root.
 * @returns The result of the almost identity function.
 * @remarks A different way to achieve a near identity is through the square root of a biased square. I saw this technique first in a shader by user "omeometo" in Shadertoy. This approach can be a bit slower than the cubic above, depending on the hardware, but I find myself using it a lot these days. While it has zero derivative, it has a non-zero second derivative, so keep an eye in case it causes problems in your application.

An extra nice thing is that this function can be used, unaltered, as an smooth-abs() function, which comes handy for symmetric funtions such as mirrored SDFs.
 * 
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const almostIdentitySqrt = (x: number, n: number): number => {
  return Math.sqrt(x * x + n)
}

/**
 * Almost unit identity function that maps the unit interval into itself.
 * @param {number} x The input value.
 * @returns The result of the almost unit identity function.
 * @remarks This is a near-identiy function that maps the unit interval into itself. It is the cousin of smoothstep(), in that it maps 0 to 0, 1 to 1, and has a 0 derivative at the origin, just like smoothstep. However, instead of having a 0 derivative at 1, it has a derivative of 1 at that point. It's equivalent to the Almost Identiy above with n=0 and m=1. Since it's a cubic just like smoothstep() it is very fast to evaluate:
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const almostUnitIdentity = (x: number): number => {
  return x * x * (2.0 - x)
}

/**
 * Returns the integral smoothstep value for the given x and T.
 *
 * @param {number} x - The input value.
 * @param {number} T - The transition value.
 * @returns {number} - The calculated value.
 * @remarks If you use smoothstep for a velocity signal (say, you want to smoothly accelerate a stationary object into constant velocity motion), you need to integrate smoothstep() over time in order to get the actual position of value of the animation. The function below is exactly that, the position of an object that accelerates with smoothstep. Note it's derivative is never larger than 1, so no decelerations happen.
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const integralSmoothstep = (x: number, T: number) => {
  if (x > T) return x - T / 2.0
  return (x * x * x * (1.0 - (x * 0.5) / T)) / (T * T)
}

/**
 * Returns the exponential impulse value for the given x and k.
 *
 * @param {number} x - The input value.
 * @param {number} k - The exponential factor.
 * @returns {number} - The calculated value.
 * @remarks Impulses are great for triggering behaviours or making envelopes for music or animation. Baiscally, for anything that grows fast and then decays slowly. The following is an exponential impulse function. Use k to control the stretching of the function. Its maximum, which is 1, happens at exactly x = 1/k.
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const expImpulse = (x: number, k: number) => {
  const h = k * x
  return h * Math.exp(1.0 - h)
}

/**
 * Returns the quadratic impulse value for the given k and x.
 *
 * @param {number} k - The quadratic factor.
 * @param {number} x - The input value.
 * @returns {number} - The calculated value.
 * @remarks Another impulse function that doesn't use exponentials can be designed by using polynomials. Use k to control falloff of the function. For example, a quadratic can be used, which peaks at x = sqrt(1/k). For a general implementation use polyImpulse.
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const quaImpulse = (k: number, x: number) => {
  return (2.0 * Math.sqrt(k) * x) / (1.0 + k * x * x)
}

/**
 * Returns the polynomial impulse value for the given k, n and x.
 *
 * @param {number} k - The polynomial factor.
 * @param {number} n - The polynomial degree.
 * @param {number} x - The input value.
 * @returns {number} - The calculated value.
 * @remarks An impulse function that doesn't use exponentials can be designed by using polynomials to get different falloff shapes, where n is the degree of the polynomial.
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const polyImpulse = (k: number, n: number, x: number) => {
  return (
    ((n / (n - 1.0)) * Math.pow((n - 1.0) * k, 1.0 / n) * x) /
    (1.0 + k * Math.pow(x, n))
  )
}

/**
 * Returns the exponential sustained impulse value for the given x, f and k.
 *
 * @param {number} x - The input value.
 * @param {number} f - The decay factor.
 * @param {number} k - The exponential factor.
 * @returns {number} - The calculated value.
 * @remarks Similar to polyImpulse, but it allows for control on the width of attack (through the parameter "k") and the release (parameter "f") independently. Also, the impulse releases at a value of 1 instead of 0.
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const expSustainedImpulse = (x: number, f: number, k: number) => {
  const s = Math.max(x - f, 0.0)
  return Math.min((x * x) / (f * f), 1 + (2.0 / f) * s * Math.exp(-k * s))
}

/**
 * Returns the cubic pulse value for the given c, w and x.
 *
 * @param {number} c - The center value.
 * @param {number} w - The width factor.
 * @param {number} x - The input value.
 * @returns {number} - The calculated value.
 * @remarks Chances are you found yourself doing smoothstep(c-w,c,x)-smoothstep(c,c+w,x) very often. I do, for example when I need to isolate some features in a signal. For those cases, this cubicPulse() below is my new friend and will be yours too soon. Bonus - you can also use it as a performant replacement for a gaussian.
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const cubicPulse = (c: number, w: number, x: number) => {
  x = Math.abs(x - c)
  if (x > w) return 0.0
  x /= w
  return 1.0 - x * x * (3.0 - 2.0 * x)
}

/**
 * Returns the exponential step value for the given x, k and n.
 *
 * @param {number} x - The input value.
 * @param {number} k - The exponential factor.
 * @param {number} n - The degree factor.
 * @returns {number} - The calculated value.
 * @remarks A natural attenuation is an exponential of a linearly decaying quantity: yellow curve, exp(-x). A gaussian, is an exponential of a quadratically decaying quantity: light green curve, exp(-x2). You can generalize and keep increasing powers, and get a sharper and sharper s-shaped curves. For really high values of n you can approximate a perfect step(). If you want such step to transition at x=a, like in the graphs to the right, you can set k = a-n⋅ln 2.
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const expStep = (x: number, k: number, n: number) => {
  return Math.exp(-k * Math.pow(x, n))
}

/**
 * Returns the gain value for the given x and k.
 *
 * @param {number} x - The input value.
 * @param {number} k - The gain factor.
 * @returns {number} - The calculated value.
 * @remarks Remapping the unit interval into the unit interval by expanding the sides and compressing the center, and keeping 1/2 mapped to 1/2, that can be done with the gain() function. This was a common function in RSL tutorials (the Renderman Shading Language). k=1 is the identity curve, k<1 produces the classic gain() shape, and k>1 produces "s" shaped curces. The curves are symmetric (and inverse) for k=a and k=1/a.
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const gain = (x: number, k: number) => {
  const a = 0.5 * Math.pow(2.0 * (x < 0.5 ? x : 1.0 - x), k)
  return x < 0.5 ? a : 1.0 - a
}

/**
 * Returns the parabola value for the given x and k.
 *
 * @param {number} x - The input value.
 * @param {number} k - The parabola factor.
 * @returns {number} - The calculated value.
 * @remarks A nice choice to remap the 0..1 interval into 0..1, such that the corners are mapped to 0 and the center to 1. You can then rise the parabolar to a power k to control its shape.

 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const parabola = (x: number, k: number) => {
  return Math.pow(4.0 * x * (1.0 - x), k)
}

/**
 * Returns the pcurve value for the given x, a and b.
 *
 * @param {number} x - The input value.
 * @param {number} a - The a factor.
 * @param {number} b - The b factor.
 * @returns {number} - The calculated value.
 * @remarks This is a generalization of the parabola function. It also maps the 0..1 interval into 0..1 by keeping the corners mapped to 0. But in this generalziation you can control the shape one either side of the curve, which comes handy when creating leaves, eyes, and many other interesting shapes.
 *
 * Note that k is chosen such that pcurve() reaches exactly 1 at its maximum for illustration purposes, but in many applications the curve needs to be scaled anyways so the slow computation of k can be simply avoided.
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const pcurve = (x: number, a: number, b: number) => {
  const k = Math.pow(a + b, a + b) / (Math.pow(a, a) * Math.pow(b, b))
  return k * Math.pow(x, a) * Math.pow(1.0 - x, b)
}

/**
 * Returns the sinc value for the given x and k.
 *
 * @param {number} x - The input value.
 * @param {number} k - The sinc factor.
 * @returns {number} - The calculated value.
 * @remarks A phase shifted sinc curve can be useful if it starts at zero and ends at zero, for some bouncing behaviors (suggested by Hubert-Jan). Give k different integer values to tweak the amount of bounces. It peaks at 1.0, but that take negative values, which can make it unusable in some applications.
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const sinc = (x: number, k: number): number => {
  const a = Math.PI * (k * x - 1.0)
  return Math.sin(a) / a
}

/**
 * Returns the truncated falloff value for the given x and m.
 *
 * @param {number} x - The input value.
 * @param {number} m - The m factor.
 * @returns {number} - The calculated value.
 * @remarks A quadratic falloff, like those in physically based point lights, but reaching zero at a given distance "m" rather than just asymptotically reaching it at infinity. Great for range controlled shadows, etc.
 * @see {@link https://iquilezles.org/articles/functions/ Original implementation} by Inigo Quilez
 */
export const truncFallof = (x: number, m: number): number => {
  x = 1.0 / ((x + 1.0) * (x + 1.0))
  m = 1.0 / ((m + 1.0) * (m + 1.0))
  return (x - m) / (1.0 - m)
}
