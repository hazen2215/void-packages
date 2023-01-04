# baseutils diff3 Makefile

CC ?=		cc
CFLAGS ?=	-O2 -pipe
CFLAGS +=	-I../libopenbsd -include openbsd.h -D_GNU_SOURCE

LIBS =	../libopenbsd/libopenbsd.a

PREFIX ?=	/usr/local
MANDIR ?=	/usr/local/share/man

PROG =	diff3prog
OBJS =	diff3prog.o

all: ${OBJS}
	${CC} ${LDFLAGS} -o ${PROG} ${OBJS} ${LIBS}

install:
	install -d -m 755 ${PREFIX}/libexec
	install -c -s -m 555 ${PROG} ${PREFIX}/libexec/${PROG}
	install -c -s -m 555 diff3.sh ${PREFIX}/bin/diff3
	install -c -m 444 diff3.1 ${MANDIR}/man1

clean:
	rm -f ${PROG} ${OBJS}
