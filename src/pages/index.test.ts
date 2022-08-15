import {describe, it, expect} from "vitest";
import {getServerSideProps} from "./index";

describe("vitest + msw", ()=>{
    it("getServerSideProps", async()=>{
        const data = await getServerSideProps();
        expect(data).toBe("");
    })
})
