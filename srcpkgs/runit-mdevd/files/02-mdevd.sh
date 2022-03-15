# vim: set ts=4 sw=4 et:

[ -n "$VIRTUALIZATION" ] && return 0

if [ -x /usr/bin/mdevd ]; then
	msg "Starting mdevd..."
	mdevd -C -f /dev/stdin <<-! & pid_mdevd=$!
		$(cat /etc/mdev.conf /etc/mdev.d/*.conf 2>/dev/null)
	!
fi
