import { mailOptions, transporter } from "/emails/client";
import { replaceMergeTags, stripHTMLTags } from "/emails/helpers";

import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function POST(request) {
    const data = await request.json();

    // get html template
    const htmlFilePath = path.join(process.cwd(), 'emails', 'contact-form.html');
    
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8', (err, htmlContent) => {
        if (err) {
            console.error('Error reading HTML file: ', err);
            return;
        }
    });

    // replace merge tags with values
    htmlContent = replaceMergeTags(data, htmlContent);
    const plainTextContent = stripHTMLTags(htmlContent);
    
    try {
        await transporter.sendMail({
           ...mailOptions,
           subject: `${ data.department }`,
           text: plainTextContent,
           html: htmlContent,
          /* attachments: [
            {
            filename: data.filename + ".jpg",
            contentType:  'image/jpeg',
            content: new Buffer.from(req.body.image.split("base64,")[1], "base64"),
            }
            ],*/
           /*  attachments: [
             {
               path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
           }
           ]*/
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: err.status });
    }
}