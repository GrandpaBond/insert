
function insert4digits(src: string, value: number offset: number): string {
    let s = src;
    let v = value;
    for i = offset + 3 to offset step - 1 {
        s[i] = char(48 + (v % 10));
        v = v\10;
   return s;
}