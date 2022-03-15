[ -n "$VIRTUALIZATION" ] && return 0

if [ -x /usr/bin/mdevd ]; then
	msg "Starting mdevd..."
	mdevd -O 4 -f /dev/stdin <<-! & pid_mdevd=$!
		$(cat /etc/mdev.conf /etc/mdev.d/*.conf 2>/dev/null)
	!
	mdevd-coldplug -O4
fi
