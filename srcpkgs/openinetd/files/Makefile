PKG_CONFIG ?= pkg-config
INSTALL ?= install

CFLAGS ?= -g -O2

DEFS += $(shell $(PKG_CONFIG) --cflags libbsd-overlay)
LIBS += $(shell $(PKG_CONFIG) --libs libbsd-overlay)

DEFS += $(shell $(PKG_CONFIG) --cflags libevent)
LIBS += $(shell $(PKG_CONFIG) --libs libevent)

DEFS += $(shell $(PKG_CONFIG) --cflags libtirpc)
LIBS += $(shell $(PKG_CONFIG) --libs libtirpc)

CPPFLAGS += $(DEFS)

inetd_OBJECTS := inetd.o

all: inetd

.c.o:
	$(CC) $(CPPFLAGS) $(CFLAGS) -c $<

inetd: $(inetd_OBJECTS)
	$(CC) $(CFLAGS) $(LDFLAGS) -o $@ $^ $(LIBS)

install: inetd
	$(INSTALL) -m 0755 inetd $(DESTDIR)/usr/bin/

clean:
	rm -f inetd inetd.o
