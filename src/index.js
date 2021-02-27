var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

module.exports = function toReadable (s) {
    s = s.toString();
    if (s != parseFloat(s)) return 'not a number';
    var n = s.split(''); 
    var str = '';
    for (var i=0;i < s.length;  i++) {
        if ((s.length-i)%3==2) {
            if (n[i] == '1') {
                str += tn[Number(n[i+1])] + ' ';
                i++;
            } else if (n[i]!=0) {
                str += tw[n[i]-2] + ' ';
            }
        } else if (n[i]!=0) { 
            str += dg[n[i]] +' ';
            if ((s.length-i)%3==0) str += 'hundred ';
        }
    }
    if (s == 0) str = dg[0];
    return str.trim();
}
