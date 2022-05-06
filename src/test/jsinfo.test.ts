import * as jsinfo from '../jsinfo'

describe('jsInfo test', function() {
    it('name test', function() {
        expect(jsinfo.name).toBe('J4J'); // name이 J4J인지 테스트
    });

    it('getName test', () => {
        expect(jsinfo.getName()).toBe('제 이름은 J4J입니다.'); // getName()이 제 이름은 J4J입니다.인지 테스트
    });

    it('getName test', () => {
        expect(jsinfo.getSum(5)).toBe(12); // getSum(5)가 12인지 테스트
    });
})