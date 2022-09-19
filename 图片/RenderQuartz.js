const _GetAttr = (quartz, field) => quartz[field] ? quartz[field] : '';

const _GetIconHTML = (quartz, options) => {
    const icon = _GetAttr(quartz, options.fields.icon);
    return icon
            ? `<img width="${options.size}" src="${this.app.vault.adapter.basePath}/${icon.path}" />`
            : '';
};

/**
 * 渲染核心回路连接
 * await dv.view('RenderQuartz', { quartz:dv.current().Item, options: { size:30 } });
 * @param {Object} quartz 
 * @param {Object} options 
 */
const RenderQuartz = async (quartz, options) => {
    quartz = dv.page(quartz.path);
    const icon = _GetIconHTML(quartz, options);
    const HTML = `${icon}${quartz.file.link}`;
    options.inLine
    ? await dv.span(HTML)
    : await dv.paragraph(HTML);
}

const RenderQuartzByLink = async (link, options) => {
    const path = link.replace(/\[/g, '').replace(/\]/g, '');
    const quartz = dv.page(path);
    const icon = _GetIconHTML(quartz, options);
    const HTML = `${icon}${quartz.file.link}`;
    options.inLine
    ? await dv.span(HTML)
    : await dv.paragraph(HTML);
};

let { quartz, options } = input;
const DefaultOptions = { size: 15, byLink: false, inLine: true, fields: { icon: 'Icon', name: 'Name' } };
options = Object.assign(DefaultOptions, options);
options.byLink 
? await RenderQuartzByLink(quartz, options)
: await RenderQuartz(quartz, options);