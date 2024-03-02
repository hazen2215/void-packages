
CC ?= cc

PROG =  sed
SRCS =	compile.c err.c main.c misc.c process.c
OBJS =  ${SRCS:.c=.o}
MAN  =  sed.1

CFLAGS ?= -O3
CFLAGS += -Wall -I.
LDFLAGS +=

PREFIX ?= /usr/local
MANDIR ?= ${PREFIX}/share/man

.c.o:
	${CC} ${CFLAGS} -c $<

sed: ${OBJS}
	${CC} -o $@ ${OBJS} ${LDFLAGS}

install: sed
	install -c -s -m 555 ${PROG} ${PREFIX}/bin/${PROG}
	install -c -m 444 ${PROG}.1 ${MANDIR}/man1

uninstall:
	rm -f ${BINDIR}/sed
	rm -f ${MANDIR}/man1/sed.1

clean:
	rm -f sed ${OBJS}
