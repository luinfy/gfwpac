var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)google\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)fbsbx\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)gravatar\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)fsdn\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)fb\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)doubleclick\.net$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)ajax\.googleapis\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)fonts\.googleapis\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)atdmt\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)googleadservices\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+GFWHack";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+GFWHack";
        return "DIRECT";
    },
    "+GFWHack": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host) || host[host.length - 1] >= 0 && isInNet(host, "172.16.0.0", "255.255.0.0") || host[host.length - 1] >= 0 && isInNet(host, "192.168.1.0", "255.255.255.0")) return "DIRECT";
        return "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080";
    }
});