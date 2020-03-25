#include<stdlib.h>
#include<emscripten/emscripten.h>

char *lltoa(long long v){
	int i = 20;
	static char result[20] = {0};
	if(v==0) return "0";
	for(;v&&i;i--,v/=10){
		result[i]="0123456789"[v%10];
	}
	return &result[i+1];
}

char EMSCRIPTEN_KEEPALIVE *lPlus(const char *x,const char *y){
	long long a = atoll(x), b = atoll(y);
	return lltoa(a+b);
}

char EMSCRIPTEN_KEEPALIVE *lSub(const char *x,const char *y){
	long long a = atoll(x), b = atoll(y);
	return lltoa(a-b);
}

char EMSCRIPTEN_KEEPALIVE *lMult(const char *x,const char *y){
	long long a = atoll(x), b = atoll(y);
	return lltoa(a*b);
}

char EMSCRIPTEN_KEEPALIVE *lDiv(const char *x,const char *y){
	long long a = atoll(x), b = atoll(y);
	return lltoa(a/b);
}

char EMSCRIPTEN_KEEPALIVE *lPow(const char *x,int y){
	long long a = atoll(x);
	long long r = 1;
	for(int i=0;i<y;i++){
		r *= a;
	}
	return lltoa(r);
}

char EMSCRIPTEN_KEEPALIVE *lMode(const char *x,const char *y){
	long long a = atoll(x), b = atoll(y);
	return lltoa(a%b);
}