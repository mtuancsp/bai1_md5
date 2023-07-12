function gcd(a, b) {
    if (b === 0n) return a;
    return gcd(b, a % b);
}

console.log(gcd(20000000000000000000000000000000000000000n, 2000000000000000000n));
